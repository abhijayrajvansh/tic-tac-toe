
interface BlockProps {
    value: string | null;
}

const Block: React.FC<BlockProps> = (props) => {
    return (
        <div className=" border border-black h-40 w-40 flex items-center justify-center cursor-pointer font-semibold text-5xl">
            {props.value}
        </div>
    )
};

export default Block;
