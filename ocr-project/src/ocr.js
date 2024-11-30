import Together from "together-ai";

export async function ocr({ file, model = "Llama-3.2-90B-Vision" }) {
  const visionLLM = `meta-llama/${model}-Instruct-Turbo`;

  const together = new Together({
    apiKey: import.meta.env.VITE_TOGETHER_API_KEY,
  });

  const base64Image = await encodeImage(file);

  const systemPrompt = `Convert the provided image into Markdown format. Ensure that all content from the page is included, such as headers, footers, subtexts, images (with alt text if possible), tables, and any other elements.

  Requirements:
  - Output Only Markdown: Return solely the Markdown content without any additional explanations or comments.
  - No Delimiters: Do not use code fences or delimiters like \`\`\`markdown.
  - Highlight key sentences by making them **bold**. For example:
    - "This is a heading" should be in **bold**.
    - "This is an important key point" should be in **bold**.
  - Complete Content: Do not omit any part of the page, including headers, footers, and subtext.
`;


  const response = await together.chat.completions.create({
    model: visionLLM,
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: systemPrompt },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${base64Image}`,
            },
          },
        ],
      },
    ],
  });

  return response.choices[0].message.content;
}

function encodeImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]); // Extract Base64
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file); // Read the file as Data URL
  });
}
