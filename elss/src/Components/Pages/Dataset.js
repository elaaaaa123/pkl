import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "../../styles/dataset.css"; // Pastikan Anda memiliki file CSS ini

const DataSet = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate
  const [opds, setOpds] = useState([]);
  const [filteredOpds, setFilteredOpds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOPD, setSelectedOPD] = useState(null);
  const [dataHasil, setDataHasil] = useState([]);
  const [allDataSet, setAllDataSet] = useState([]);

  // Mengambil semua dataset
  useEffect(() => {
    const fetchAllDataSet = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://116.206.212.234:4000/dataset");
        console.log("All Dataset Response:", response.data); // Log untuk debugging
        setAllDataSet(response.data);
        setDataHasil(response.data);
      } catch (error) {
        console.error("Error fetching all datasets:", error); // Log error
        setError("Terjadi kesalahan saat mengambil data dataset.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllDataSet();
  }, []);

  // Mengambil data OPD
  useEffect(() => {
    const fetchDataOPD = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://116.206.212.234:4000/list-opd");
        console.log("OPD List Response:", response.data); // Log untuk debugging
        setOpds(response.data);
        setFilteredOpds(response.data);
      } catch (error) {
        console.error("Error fetching OPD list:", error); // Log error
        setError("Terjadi kesalahan saat mengambil daftar OPD.");
      } finally {
        setLoading(false);
      }
    };
    fetchDataOPD();
  }, []);

  // Mengambil dataset berdasarkan OPD yang dipilih
  useEffect(() => {
    const fetchDatasetByOPD = async () => {
      if (selectedOPD) {
        setLoading(true);
        try {
          const response = await axios.get("http://116.206.212.234:4000/dataset", {
            params: {
              id_opd: selectedOPD.id_opd,
            },
          });
          console.log("Dataset by OPD Response:", response.data); // Log untuk debugging
          setDataHasil(response.data);
          setError(null);
        } catch (error) {
          console.error("Error fetching dataset by OPD:", error); // Log error
          setError("Terjadi kesalahan saat mengambil data berdasarkan OPD.");
        } finally {
          setLoading(false);
        }
      } else {
        setDataHasil(allDataSet);
      }
    };

    fetchDatasetByOPD();
  }, [selectedOPD, allDataSet]);

  // Mencari OPD berdasarkan input
  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filtered = opds.filter((opd) =>
      opd.nama_opd.toLowerCase().includes(searchValue)
    );
    setFilteredOpds(filtered);
  };

  // Memilih OPD
  const handleSelectOPD = (opd) => {
    setSelectedOPD(opd);
  };

  // Menangani klik pada dataset
  const handleDatasetClick = (datasetId) => {
    navigate(`/dataset/detail/${datasetId}`); // Gunakan navigate untuk berpindah
  };

  return (
    <div className="dataset-container">
      <h2 className="dataset-title">Dataset</h2>

      <div className="dataset-content">
        <div className="left-column">
          <div className="form-row">
            <input
              type="text"
              className="dataset-input form-control"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Cari OPD"
            />
          </div>

          {filteredOpds.length > 0 && (
            <div className="opd-list">
              {filteredOpds.map((opd) => (
                <div
                  key={opd.id_opd}
                  className={`opd-item card ${selectedOPD && selectedOPD.id_opd === opd.id_opd ? "selected" : ""}`}
                  onClick={() => handleSelectOPD(opd)}
                >
                  <div className="card-body">
                    <h5 className="card-title">{opd.nama_opd}</h5>
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="right-column">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="result-list">
              <h3>List Dataset</h3>
              {dataHasil.length > 0 ? (
                dataHasil.map((item) => (
                  <div
                    key={item.id} // Gunakan ID dataset sebagai key
                    className="data-item card"
                    onClick={() => handleDatasetClick(item.id)} // Arahkan ke detail dataset
                  >
                    <div className="card-body">
                      <p className="card-text">{item.uraian_dssd}</p>
                      <h2 className="card-title">{item.nama_dataset}</h2>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text"><strong>Tanggal Dimodifikasi:</strong> {item.modified}</p>
                      <p className="card-text"><strong>Tahun:</strong> {item.tahun}</p>
                      <p className="card-text"><strong>Nama OPD:</strong> {item.nama_opd}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Tidak ada data yang ditemukan</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataSet;
