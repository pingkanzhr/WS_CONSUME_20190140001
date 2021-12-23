function dataJSON(){
    var url = "http://localhost:8080/datamahasiswa/json";
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const tbl = document.createElement("table");
      tbl.setAttribute("id", "tbl");
      tbl.setAttribute("class", "table table-success table-striped");
  
      const thead = tbl.createTHead();
      for(var i = 0; i < data.length; i++){
        const tr = tbl.insertRow()
        for(var j = 0; j < Object.keys(data[i]).length; j++){
          const td = tr.insertCell();
          td.innerHTML = data[i][Object.keys(data[i])[j]];
        }
      }
      $(".container").append(tbl);
      $("#tbl").find('thead').append('<tr><th>NIM</th><th>Nama</th><th>Alamat</th><th>Fakultas</th><th>Program Studi</th></tr>');
    })
  }
  
  function deleteData(){
    $("#tbl").remove();
    $("#tbl2").remove();
  }