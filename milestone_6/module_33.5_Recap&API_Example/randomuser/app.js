const loadData = async () => {
  const url = "https://randomuser.me/api";
  const res = await fetch(url);
  const data = await res.json();
  updateElement(data.results[0]);
};

loadData()
const showData = (title, info) => {
  document.getElementById("my_title").innerHTML = title;
  document.getElementById("my_info").innerHTML = info;
};

const updateElement =(data) =>{
    document.getElementById('image').setAttribute('src',data?.picture?.large)
    showData("Hi, My name is ", `${data?.name?.title} ${data?.name?.first} ${data?.name?.last}`);

    document.getElementById("me").addEventListener("mouseover", (event) => {
        showData("Hi, My name is ", `${data?.name?.title} ${data?.name?.first} ${data?.name?.last}`);
      });
      document.getElementById("mail").addEventListener("mouseover", (event) => {
        showData("My Email address is ",data?.email);
      });
      document.getElementById("birthday").addEventListener("mouseover", (event) => {
        showData("My birthday is ",(new Date( data?.dob?.date)).toDateString());
      });
      document.getElementById("address").addEventListener("mouseover", (event) => {
        showData("My address is ", `${data?.location?.timezone?.description}/ ${data?.location?.city}, ${data?.location?.state}, ${data?.location?.country}`);
      });
      document.getElementById("phone").addEventListener("mouseover", (event) => {
        showData("My phone number is ",data?.phone);
      });
      document.getElementById("password").addEventListener("mouseover", (event) => {
        showData("My password  is ", data?.login?.password);
      });
      
}

