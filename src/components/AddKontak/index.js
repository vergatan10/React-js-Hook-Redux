import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addKontak,
  getListKontak,
  updateKontak,
} from "../../actions/kontakAction";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  const { addKontakResult, detailKontakResult, updateKontakResult } =
    useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (id) {
      // update kontak
      dispatch(updateKontak({ nama: nama, nohp: nohp, id: id }));
    } else {
      // console.log("1. Masuk handle submit");
      dispatch(addKontak({ nama: nama, nohp: nohp }));
    }
  };

  useEffect(() => {
    if (addKontakResult) {
      // console.log("5. Masuk Component Did Update");
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      // console.log("5. Masuk Component Did Update");
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult, dispatch]);

  useEffect(() => {
    if (updateKontakResult) {
      // console.log("5. Masuk Component Did Update");
      dispatch(getListKontak());
      setNama("");
      setNohp("");
      setId("");
    }
  }, [updateKontakResult, dispatch]);

  return (
    <div>
      <h4>{id ? "Edit Kontak" : "Add Kontak"}</h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="nama"
          placeholder="Nama..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="text"
          name="nohp"
          placeholder="Nohp..."
          value={nohp}
          onChange={(e) => setNohp(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddKontak;
