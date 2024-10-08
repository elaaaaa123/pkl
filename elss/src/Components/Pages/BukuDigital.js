import React, { useReducer, useEffect } from "react";
import axios from "axios";
import "../../styles/BukuDigital.css";

// Reducer untuk mengelola state
const initialState = {
  bukuDigital: [],
  loading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, bukuDigital: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

const BukuDigital = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_SUCCESS", payload: [] }); // Reset loading state
      try {
        const response = await axios.get("http://116.206.212.234:4000/buku-digital");
        if (response.data) {
          dispatch({ type: "FETCH_SUCCESS", payload: response.data });
        } else {
          dispatch({ type: "FETCH_ERROR", payload: "Data tidak ditemukan." });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch({ type: "FETCH_ERROR", payload: "Gagal mengambil data buku digital. Coba lagi." });
      }
    };
    fetchData();
  }, []);

  // Fungsi untuk membuka file PDF buku digital
  const openPDF = (filePath) => {
    const fullUrl = `http://116.206.212.234:4000${filePath.replace(
      "handler/http",
      ""
    )}`;
    window.open(fullUrl, "_blank");
  };

  return (
    <div className="buku-digital-container">
      <div className="buku-digital-box">
        <h2 className="buku-digital-title">Daftar Buku Digital</h2>
        {state.error && <p className="error-message">{state.error}</p>}

        {state.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="result-table table-striped">
            <h3>Hasil Pencarian</h3>
            <table>
              <thead>
                <tr>
                  <th>Judul Buku</th>
                  <th>Tahun</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {state.bukuDigital.length > 0 ? (
                  state.bukuDigital.map((buku) => (
                    <tr key={buku.id_buku_digital}>
                      <td>{buku.buku}</td>
                      <td>{buku.tahun}</td>
                      <td>
                        <button
                          className="detail-button"
                          onClick={() => openPDF(buku.file)} // Buka file PDF
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">Tidak ada data yang ditemukan</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BukuDigital;
