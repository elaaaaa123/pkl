import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Select from "react-select";
import "../../styles/sektoral.css";

const Sektoral = () => {
  const [opds, setDataOPD] = useState([]);
  const [urusans, setDataUrusan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dariTahun, setDariTahun] = useState("");
  const [sampaiTahun, setSampaiTahun] = useState("");
  const [selectedOPD, setSelectedOPD] = useState(null);
  const [selectedUrusan, setSelectedUrusan] = useState(null);
  const [results, setResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [resultsPerPage] = useState(20);

  // Fetch data OPD
  const fetchDataOPD = async () => {
    try {
      const response = await axios.get("http://116.206.212.234:4000/list-opd");
      const opdOptions = response.data.map(opd => ({
        value: opd.id_opd,
        label: opd.nama_opd
      }));
      setDataOPD(opdOptions);
    } catch (error) {
      setError("Gagal mengambil data OPD.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataOPD();
  }, []);

  const handleOPDChange = async (selectedOption) => {
    setSelectedOPD(selectedOption);
    setSelectedUrusan(null);
    setLoading(true);

    if (selectedOption) {
      try {
        const response = await axios.get(
          `http://116.206.212.234:4000/data-sektoral/list-urusan-by-id-opd?id_user_opd=${selectedOption.value}`
        );
        const urusanOptions = response.data.map(urusan => ({
          value: urusan.kode_urusan,
          label: urusan.nama_urusan
        }));
        setDataUrusan(urusanOptions);
      } catch (error) {
        setError("Gagal mengambil data urusan.");
      } finally {
        setLoading(false);
      }
    } else {
      setDataUrusan([]);
      setLoading(false);
    }
  };

  // Fetch data
  const fetchData = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get("http://116.206.212.234:4000/data-sektoral", {
        params: {
          id_user_opd: selectedOPD ? selectedOPD.value : "",
          kode_urusan: selectedUrusan ? selectedUrusan.value : "",
          dari_tahun: dariTahun,
          sampai_tahun: sampaiTahun,
          page: page,
          per_page: resultsPerPage,
        },
      });

      setResults(response.data);
      const totalItems = response.headers['x-pagination-total-count'];
      setTotalData(totalItems ? parseInt(totalItems, 10) : 0);
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data.");
      Swal.fire("Error", "Terjadi kesalahan saat mengambil data", "error");
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchData(1);
  };

  // Handle pagination
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      fetchData(newPage);
    }
  };

  const totalPages = Math.min(Math.ceil(totalData / resultsPerPage), 19); // Membatasi maksimum halaman ke 19

  return (
    <div className="sektoral-container">
      <div className="sektoral-box">
        <h2 className="sektoral-title">Cari Data Sektoral</h2>
        <form className="sektoral-form" onSubmit={handleSearch}>
          {/* Select OPD */}
          <Select
            options={opds}
            className="sektoral-input react-select-container"
            classNamePrefix="react-select" // Menambahkan prefix untuk gaya default react-select
            value={selectedOPD}
            onChange={handleOPDChange}
            placeholder="Pilih OPD"
            isClearable
          />

          {/* Select Urusan */}
          <Select
            className="sektoral-input"
            value={selectedUrusan}
            onChange={setSelectedUrusan}
            options={urusans}
            placeholder="Pilih Urusan"
            isDisabled={!selectedOPD}
            isClearable
          />

          <input
            className="sektoral-input"
            type="number"
            placeholder="Dari Tahun"
            value={dariTahun}
            onChange={(e) => setDariTahun(e.target.value)}
            required
          />
          <input
            className="sektoral-input"
            type="number"
            placeholder="Sampai Tahun"
            value={sampaiTahun}
            onChange={(e) => setSampaiTahun(e.target.value)}
            required
          />
          <button className="sektoral-button" type="submit">
            Cari
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="result-table">
            <h3>Hasil Pencarian</h3>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Uraian</th>
                  <th>Satuan</th>
                  <th>Jenis</th>
                  <th>Kategori</th>
                </tr>
              </thead>
              <tbody>
                {results.length > 0 ? (
                  results.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1 + (currentPage - 1) * resultsPerPage}</td>
                      <td>{item.uraian_dssd}</td>
                      <td>{item.satuan}</td>
                      <td>{item.jenis_string}</td>
                      <td>{item.kategori_string}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">Tidak ada data yang ditemukan</td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="page-info">Page {currentPage} of {totalPages}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sektoral;
