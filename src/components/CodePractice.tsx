interface CodePracticeProps {
    listName: string
    listItems: string[]
  }
  
const CodePractice: React.FC<CodePracticeProps> = ({ listName, listItems }) => {
    return (
    <div className="bg-cinnabar text-jet-stream text-base">
        <div className=""> {/* Containter Containter Containter*/}



            <div className="py-2 flex items-center">
                <div className="basis-1/6 px-6"></div>
                <div className="basis-5/6 px-6">{listName}</div>
             
            </div>

            <ul className="text-2xl">
                {listItems.map((item, index, array) => {
                    const paddedIndex = (index+1).toString().padStart(2, '0')
                    let isLastItem = index + 1 === array.length
                    return(
                        <div className={` py-5 flex 
                        items-center border-t ${isLastItem ? "border-b" : "" } border-jet-stream
                        hover:bg-jet-stream  hover:text-cinnabar  transition duration-75`}
                        key={index}
                        >
                            <div className="basis-1/6 px-6 ">{paddedIndex}</div>
                            <div className="basis-5/6 px-6 ">{item}</div>
                        </div>
                    )
                }
                )}
            </ul>

        </div>
    </div>
    )
}
// interface Props {
//     listName: string;
//   }
  
//   const CodePractice: React.FC<Props> = ({ listName }: Props) => {
//     return (
//       <div className="bg-cinnabar text-jet-stream">
//         <div className="container mx-auto">
//           <div className="py-2 flex items-center">
//             <div className="basis-1/4 px-6"></div>
//             <div className="basis-1/2 px-6">{listName}</div>
//             <div className="basis-1/4 px-6"></div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
export default CodePractice;