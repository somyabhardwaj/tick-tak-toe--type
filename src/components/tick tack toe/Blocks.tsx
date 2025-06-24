

interface BlockProps {
    value?:string | null;
    onClick?:()=> void;
}
const Blocks = (props: BlockProps)=>{

    return (
        <div onClick={props.onClick}className="block">
           {props.value}
        </div>
    )
}
export default Blocks;