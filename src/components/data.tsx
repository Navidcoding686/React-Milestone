import { use } from 'react';
import type { Stack } from './type';
import Stackcard from './Stackcard';

interface StackProps {
    data: Promise<Stack[]>;
}

const Data = ({ data }: StackProps) => {

    const stack = use(data);

    return (
        <div className='bg-white'>

            <div className='ml-2 mr-2 px-4'>

                <div>
                    <h2 className='text-3xl md:text-4xl font-bold brand-gradient-text py-2'>
                        Explore The Technologies
                    </h2>

                    <p className='text-[#0c141f] py-1 text-sm md:text-base'>
                        Pick one technology per catagory to build your stack.
                    </p>
                </div>

                <div>
                    <Stackcard stack={stack} />
                </div>

            </div>

        </div>
    );
};

export default Data;