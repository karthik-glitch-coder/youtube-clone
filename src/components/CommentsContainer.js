import React from "react";

const commentsData = [
  {
    name: "Karthik",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    replies: [
      {
        name: "Karthik",
        text: "lorem ipsum bit confix datu",
        replies: [],
      },
    ],
  },
  {
    name: "Karthik",
    text: "lorem ipsum bit confix datu",
    replies: [
      {
        name: "Karthik",
        text: "lorem ipsum bit confix datu",
        replies: [
          {
            name: "Karthik",
            text: "lorem ipsum bit confix datu",
            replies: [
              {
                name: "Karthik",
                text: "lorem ipsum bit confix datu",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Karthik",
    text: "lorem ipsum bit confix datu",
    replies: [
      {
        name: "Karthik",
        text: "lorem ipsum bit confix datu",
        replies: [{
            name: "Karthik",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
            replies: [
              {
                name: "Karthik",
                text: "lorem ipsum bit confix datu",
                replies: [{
                    name: "Karthik",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
                    replies: [
                      {
                        name: "Karthik",
                        text: "lorem ipsum bit confix datu",
                        replies: [{
                            name: "Karthik",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
                            replies: [
                              {
                                name: "Karthik",
                                text: "lorem ipsum bit confix datu",
                                replies: [],
                              },
                            ],
                          }],
                      },
                    ],
                  }],
              },
            ],
          }],
      },
    ],
  },
  {
    name: "Karthik",
    text: "lorem ipsum bit confix datu",
    replies: [
      {
        name: "Karthik",
        text: "lorem ipsum bit confix datu",
        replies: [],
      },
    ],
  },
  {
    name: "Karthik",
    text: "lorem ipsum bit confix datu",
    replies: [{
        name: "Karthik",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
        replies: [
          {
            name: "Karthik",
            text: "lorem ipsum bit confix datu",
            replies: [{
                name: "Karthik",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
                replies: [
                  {
                    name: "Karthik",
                    text: "lorem ipsum bit confix datu",
                    replies: [{
                        name: "Karthik",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
                        replies: [
                          {
                            name: "Karthik",
                            text: "lorem ipsum bit confix datu",
                            replies: [],
                          },
                        ],
                      }],
                  },
                ],
              }],
          },
        ],
      }],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-lg bg-gray-100 rounded-lg my-2">
      <img
        className="w-10 h-7 mt-1"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        alt="comment"
      />
      <div className="px-1">
        <p className="font-bold">{name}</p>
        <p className=" mb-1">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
        <Comment  data={comment} />
        <div className="pl-5 ml-5  border border-l-black">
            <CommentsList comments={comment.replies}/>
        </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold py-1">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
