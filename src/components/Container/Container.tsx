export interface LayoutProps  { 
    children: React.ReactNode
 }


const Container = (props : LayoutProps) => {
    
    return (
        <div className='w-120 mx-auto my-0'>
            {props.children}
        </div>
    );
};

export default Container;