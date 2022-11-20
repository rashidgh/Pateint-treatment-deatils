let p = async () => {
  let data = await window.fetch("./index.json");
  let finaldata = await data.json();
  console.log(finaldata);
  finaldata.map(e => {
    document.querySelector(
      "datalist"
    ).innerHTML += `<option>${e.testname}</option>`;
    document.querySelector(
      "#td1"
    ).innerHTML += `<tr><td>${e.testname}</td><td>${e.price}</td></tr>`;
  });
  let str1 = "";
  let form = document.querySelector("form");
  form.addEventListener("submit", e => {
    if (e.target[1].value === "") {
      alert('please select test name')
    }
    else {
      e.preventDefault();
      str1 = e.target[1].value;
      console.log(str1);
      // e.target[1].value;
      console.log(e.target[1].value);
      document.querySelector(".pname").innerHTML = `${e.target[0].value}`;
      finaldata.map(e => {
        if (str1 === e.testname) {
          document.querySelector(
            "#td2"
          ).innerHTML += `<tr><td>${e.testname}</td><td id = 'pricee'>${e.price}<i class="fa-solid fa-trash"></i></td></tr>`;
        }
      });
      document.querySelectorAll("i").forEach(e => {
        e.addEventListener("click", del => {
          del.target.parentElement.parentElement.remove();
        });
      });

      setInterval(() => {
        let price = document.querySelectorAll("#pricee");
        let sum = 0;
        price.forEach(li => {
          let num = parseInt(li.innerHTML);
          // console.log(li.innerText);
          sum = sum + num;
        });
        let total = document.querySelector("#total");
        total.innerHTML = sum;
      }, 200)
      e.target[1].value = "";
    }
  });
};
p();
