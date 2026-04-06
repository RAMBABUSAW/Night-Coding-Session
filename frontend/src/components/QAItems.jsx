// // import { useState } from "react";
// // import ReactMarkdown from "react-markdown";

// // const QAItem = ({ item, onPin }) => {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <div className="bg-white rounded shadow mb-4 p-4 transition hover:shadow-md">
// //       <div className="flex justify-between items-center">
// //         <h3
// //           className="font-medium cursor-pointer"
// //           onClick={() => setOpen(!open)}
// //         >
// //           {item.question}
// //         </h3>

// //         <button onClick={() => onPin?.(item._id)}>
// //           {item.pinned ? "📌" : "📍"}
// //         </button>
// //       </div>

// //       {open && (
// //         <div className="mt-3 text-gray-700">
// //           <ReactMarkdown>{item.answer}</ReactMarkdown>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default QAItem;

// import { useState } from "react";
// import ReactMarkdown from "react-markdown";
// import axios from "../utils/axiosInstance";
// import { API_PATHS } from "../utils/apiPaths";

// const QAItem = ({ item, onPin }) => {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [explanation, setExplanation] = useState("");

//   const handleExplain = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post(API_PATHS.AI.EXPLAIN, {
//         question: item.question,
//       });

//       setExplanation(res.data.data.explanation); // ✅ important
//       setOpen(true);
//     } catch (err) {
//       console.log(err.response?.data);
//       alert("Failed to generate explanation");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white rounded shadow mb-4 p-4 transition hover:shadow-md">
//       <div className="flex justify-between items-center">
//         <h3
//           className="font-medium cursor-pointer"
//           onClick={() => setOpen(!open)}
//         >
//           {item.question}
//         </h3>

//         <button onClick={() => onPin?.(item._id)}>
//           {item.pinned ? "📌" : "📍"}
//         </button>
//       </div>

//       {/* 🔥 Explain button */}
//       <button
//         onClick={handleExplain}
//         className="mt-3 bg-blue-500 text-white px-3 py-1 rounded"
//       >
//         {loading ? "Loading..." : "Explain"}
//       </button>

//       {/* 🔥 Explanation */}
//       {open && explanation && (
//         <div className="mt-3 text-gray-700">
//           <ReactMarkdown>{explanation}</ReactMarkdown>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QAItem;

import { useState } from "react";
import ReactMarkdown from "react-markdown";

const QAItem = ({ item, onPin }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded shadow mb-4 p-4 transition hover:shadow-md">
      <div className="flex justify-between items-center">
        <h3
          className="font-medium cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {item.question}
        </h3>

        <button onClick={() => onPin?.(item._id)}>
          {item.pinned ? "📌" : "📍"}
        </button>
      </div>

      {open && (
        <div className="mt-3 text-gray-700">
          <ReactMarkdown>{item.answer}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default QAItem;
