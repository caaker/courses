console.log("Starting: 0")
function resolveAfterSeconds(x) 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, x);
  });
}

async function f1() {
  const x = await resolveAfterSeconds(5000);
  console.log(x); // 10
}

f1();