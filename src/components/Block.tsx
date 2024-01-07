interface BlockProps {
  value: string | null;
  onClick: () => void;
}

const Block: React.FC<BlockProps> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className=" border-2 border-white text-yellow-300 h-32 w-32 flex items-center justify-center cursor-pointer font-semibold text-8xl left-1/2">
      {props.value}
    </div>
  );
};

export default Block;
