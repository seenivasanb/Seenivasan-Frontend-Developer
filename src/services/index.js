export const fetchCapsules = async ({ ...fields }) => {
  try {
    const response = await fetch("http://localhost:4000/api/v1/capsules/", {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    if (data) {
      return { status: true, data };
    } else {
      return { status: false, data: "NO DATA FOUND" };
    }
  } catch (error) {
    return { status: false, data: "FAILED" };
  }
};
