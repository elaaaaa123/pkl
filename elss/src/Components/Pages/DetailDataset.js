import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/DetailDataset.css'; // Pastikan Anda memiliki file CSS ini

const DetailDataset = () => {
    const { id } = useParams(); // Mengambil ID dari URL
    const [dataset, setDataset] = useState(null);
    const [loading, setLoading] = useState(true);

    // Mengambil detail dataset berdasarkan ID
    const fetchDatasetDetail = async () => {
        try {
            const response = await axios.get(`http://116.206.212.234:4000/dataset/${id}`);
            setDataset(response.data);
        } catch (error) {
            console.error('Error fetching the dataset detail:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDatasetDetail();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Memastikan dataset tidak null sebelum mengakses propertinya
    if (!dataset) {
        return <div>Tidak ada data ditemukan.</div>;
    }

    return (
        <div className="dataset-detail-container">
            <h2>{dataset.uraian_dssd}</h2>
            <p>{dataset.description}</p>
            <div className="dataset-info">
                <p><strong>Organisasi:</strong> {dataset.nama_opd}</p>
                <p><strong>Kode Urusan:</strong> {dataset.kode_urusan}</p>
                <p><strong>Kategori:</strong> {dataset.kategori_string}</p>
                <p><strong>Jenis Data:</strong> {dataset.jenis_string}</p>
                <p><strong>Dimensi:</strong> {dataset.dimensi}</p>
                <p><strong>Satuan:</strong> {dataset.satuan}</p>
                <p><strong>Terakhir Dimodifikasi:</strong> {new Date(dataset.modified).toLocaleDateString()}</p>
            </div>
            {dataset.download_url && (
                <a href={dataset.download_url} target="_blank" rel="noopener noreferrer" download>
                    Download Data
                </a>
            )}
        </div>
    );
};

export default DetailDataset;
