import Image from "next/image"
import { CustomButtonProps } from "../types"


function CustomButton({ handleClick, title, containerStyles, btnType }: CustomButtonProps) {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        // onClick={() => handleClick()}
    >
        <span className={`flex-1`}>
            { title }
        </span>
    </button>
  )
}

export default CustomButton