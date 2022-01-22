import React, { useEffect, useState } from "react";
import DataTable from "./DataTable.component";

// const tableData = [
//   {
//     id: 1,
//     name: "Frozen yogurt",
//     type: "Ice cream",
//     calories: 159,
//     fat: 6,
//     carbs: 24,
//     protein: 4,
//     sodium: 87,
//     calcium: 14,
//     iron: 1,
//   },
//   {
//     id: 2,
//     name: "Ice cream sandwhich",
//     type: "Ice cream",
//     calories: 237,
//     fat: 9,
//     carbs: 37,
//     protein: 4.3,
//     sodium: 129,
//     calcium: 8,
//     iron: 1,
//   },
//   {
//     id: 3,
//     name: "Eclair",
//     type: "Pastry",
//     calories: 262,
//     fat: 16,
//     carbs: 37,
//     protein: 6,
//     sodium: 337,
//     calcium: 6,
//     iron: 7,
//   },
//   {
//     id: 4,
//     name: "Cupcake",
//     type: "Pastry",
//     calories: 305,
//     fat: 3.7,
//     carbs: 67,
//     protein: 4.3,
//     sodium: 413,
//     calcium: 3,
//     iron: 8,
//   },
//   {
//     id: 5,
//     name: "Gingerbread",
//     type: "Pastry",
//     calories: 356,
//     fat: 16,
//     carbs: 49,
//     protein: 3.9,
//     sodium: 327,
//     calcium: 7,
//     iron: 16,
//   },
//   {
//     id: 6,
//     name: "Jelly bean",
//     type: "Other",
//     calories: 375,
//     fat: 0,
//     carbs: 94,
//     protein: 0,
//     sodium: 50,
//     calcium: 0,
//     iron: 0,
//   },
//   {
//     id: 7,
//     name: "Lollipop",
//     type: "Other",
//     calories: 392,
//     fat: 0.2,
//     carbs: 98,
//     protein: 0,
//     sodium: 38,
//     calcium: 0,
//     iron: 2,
//   },
//   {
//     id: 8,
//     name: "Honeycomb",
//     type: "Other",
//     calories: 408,
//     fat: 3.2,
//     carbs: 87,
//     protein: 6.5,
//     sodium: 562,
//     calcium: 0,
//     iron: 45,
//   },
//   {
//     id: 9,
//     name: "Donut",
//     type: "Pastry",
//     calories: 52,
//     fat: 25,
//     carbs: 51,
//     protein: 4.9,
//     sodium: 326,
//     calcium: 2,
//     iron: 22,
//   },
//   {
//     id: 10,
//     name: "KitKat",
//     type: "Other",
//     calories: 16,
//     fat: 6,
//     carbs: 65,
//     protein: 7,
//     sodium: 54,
//     calcium: 12,
//     iron: 6,
//   },
// ];
// const tableHeaders = {
//   id: { label: "ID", minWidth: 50, visible: true },
//   name: { label: "Name", minWidth: 300, sortable: true, visible: true },
//   type: { label: "Type", minWidth: 200, sortable: true, visible: true },
//   calories: { label: "Calories (g)", minWidth: 200, sortable: true, visible: true },
//   fat: { label: "Fat (g)", minWidth: 200, sortable: true, visible: true },
//   carbs: { label: "Carbs (g)", minWidth: 100, sortable: true, visible: true },
//   protein: { label: "Protein (g)", minWidth: 100, sortable: true, visible: true },
//   sodium: { label: "Sodium (mg)", minWidth: 200, sortable: true, visible: true },
//   calcium: { label: "Calcium (mg)", minWidth: 50, sortable: true, visible: true },
//   iron: { label: "Iron (mg)", minWidth: 100, sortable: true, visible: true }
// };

const tableHeaders2 = {
  title: { label: "Title", minWidth: 150, visible: true },
  year: { label: "Year", minWidth: 50, sortable: true, visible: true },
  runtime: { label: "RunTime", minWidth: 50, sortable: true, visible: true },
  director: { label: "Director", minWidth: 100, sortable: true, visible: true }
};

export default function DataTableComponent(props) {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("/api/movies", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "d9c87f999amshb4af30838481e71p1ea5f2jsnce1fbcd684a2"
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      setTableData(data);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div style={{"margin": "auto", "width": "90%"}}>
      <DataTable
        title="Data Table Example"
        tableHeaders={tableHeaders2}
        tableData={tableData}
        searchEnabled={true}
        searchBy={"title"} // table header key name which needs to be searched
        paginationEnabled={true}
        settingsEnabled={true}
      />
    </div>
  );
}
