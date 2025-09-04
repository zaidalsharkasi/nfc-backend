const HeaderImage = require('../models/headerImage');
const handlerFactory = require('./handlerFactory');
const { getRelativeFilePath } = require('../utils/fileUpload');
const catchAsync = require('../utils/catchAsync');
exports.getHeaderImage = handlerFactory.getOne(HeaderImage);
exports.createHeaderImage = catchAsync(async (req, res) => {
  //   console.log('req.file..', req.file);
  if (req.file) {
    req.body.image = getRelativeFilePath(req.file);
  }

  const headerImage = await HeaderImage.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      headerImage,
    },
  });
});
exports.updateHeaderImage = catchAsync(async (req, res) => {
  if (req.file) {
    req.body.image = getRelativeFilePath(req.file);
  }
  const headerImage = await HeaderImage.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: 'success',
    data: {
      headerImage,
    },
  });
});
exports.deleteHeaderImage = handlerFactory.deleteOne(HeaderImage);
