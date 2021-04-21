export const helloFromSMSServer = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Hello from the mock SMS server!",
  });
};
