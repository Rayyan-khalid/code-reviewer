import generateContent from "../services/ai.service.js"; // rename import to match service

export const getReview = async (req, res) => {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).send("Prompt is required");
    }

    const response = await generateContent(code); // use the default export function

    return res.status(200).json({
      success: true,
      data: response,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
