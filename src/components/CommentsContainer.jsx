import { data } from "autoprefixer";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const commentsData = [
  {
    name: "Vijay B",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vijay B",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [
      {
        name: "Vijay B",
        text: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Vijay B",
        text: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [
          {
            name: "Vijay B",
            text: "lorem ipsum dolo sit amet, consectetur adip",
            replies: [
              {
                name: "Vijay B",
                text: "lorem ipsum dolo sit amet, consectetur adip",
                replies: [
                  {
                    name: "Vijay B",
                    text: "lorem ipsum dolo sit amet, consectetur adip",
                    replies: [],
                  },
                  {
                    name: "Vijay B",
                    text: "lorem ipsum dolo sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Vijay B",
                        text: "lorem ipsum dolo sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vijay B",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vijay B",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vijay B",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vijay B",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vijay B",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-center mt-2 shadow-lg bg-gray-200 rounded-lg">
      <AccountCircleIcon style={{ width: "40px", height: "40px" }} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className=""> {text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
