const Bootcamp = require("../models/Bootcamp");

// @dec     Get  all bootcamps
// @route   Get /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @dec     Get  single bootcamp
// @route   Get /api/v1/bootcamps:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

// @dec     Create new bootcamp
// @route   Post /api/v1/bootcamps:id
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(200).json({
    success: true,
    data: bootcamp,
  });
};

// @dec     Update new bootcamp
// @route   Put /api/v1/bootcamps:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @dec     Delete bootcamp
// @route   Post /api/v1/bootcamps:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
