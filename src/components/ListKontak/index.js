import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteKontak,
  getListKontak,
  detailKontak,
} from "../../actions/kontakAction";

function ListKontak() {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
    deleteKontakResult,
  } = useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action getlistkontak
    // console.log("1. use effect component did mount");
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteKontakResult) {
      // console.log("5. Masuk Component Did Update");
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);

  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama} - {kontak.nohp} -
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => dispatch(deleteKontak(kontak.id))}
              >
                Hapus
              </button>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => dispatch(detailKontak(kontak))}
              >
                Edit
              </button>
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
      )}
    </div>
  );
}

export default ListKontak;
