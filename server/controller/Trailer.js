import trailerModel from "../model/Trailer.js";

export const getTrailers = async (req, res) => {
  try {
    const trailer = await trailerModel.find();
    return res.send(trailer);
  } catch (error) {
    console.log(error);
  }
};

export const createTrailer = async (req, res) => {
  try {
    const { title, director, review, actors, Data, description, cover } = req.body;
    const newTrailer = new trailerModel({
      title,
      director,
      review,
      actors,
      Data,
      description,
      cover,
    });
    await newTrailer.save();
    return res.json(newTrailer);
  } catch (error) {
    console.log(error);
  }
};

export const UpdateTrailer = async (req, res) => {
  try {
    const trailer = await trailerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.json(trailer);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const DeleteTrailer = async (req, res) => {
    try {
        const trailer = await trailerModel.findByIdAndDelete(req.params.id);
        return res.send("Trailer deleted"), res.status(204);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const getTrailer= async (req, res) => {
    try {
        const trailer = await trailerModel.findById(req.params.id);
        return res.send(trailer);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}
