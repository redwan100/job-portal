
const BlogItem = ({ques, ans}) => {

  return (
    <>
      <div
        className={` bg-slate-50/60 p-4 border border-gray-100 rounded-md shadow-md`}
      >
        <div className="bg-slate-50 p-3">
          <h1
            className="text-2xl font-semibold"
          
          >
          {ques}
          </h1>
        </div>
        
          <p className="p-5 text-gray-500">
           {ans}
          </p>
       
      </div>
    </>
  );
};

export default BlogItem;
