const getuser = async () => {
  try {
    const res = await fetch('vk.com');
    const data = await res.json();
  } catch (e) {
    console.log(e);
  }
};

getuser();
