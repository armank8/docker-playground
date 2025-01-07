const connectToDatabase = () => {
  const dummyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
  return dummyPromise;
};

export default connectToDatabase;
