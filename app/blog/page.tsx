import Image from 'next/image'
import logo from '../public/Rooted.png'
import {motion} from 'framer-motion'

export default function Blog() {
    return (
        <main>
            <div>
                <h1 className='indent-32 pt-20 font-bold capitalize text-5xl text-dark '>Latest Blog</h1>
                <div className='border-solid'>
                    <p className='indent-60 display-flex border-solid border-black-500 p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper egestas quam. Maecenas posuere iaculis leo, commodo placerat ligula posuere a. Quisque ut turpis leo. Aenean varius, purus vel tempus sagittis, velit mi tempor tellus, vel vestibulum dui diam nec dui. Nam gravida, arcu quis egestas condimentum, dui mauris mollis neque, non rutrum eros nibh et nibh. Aliquam <br className=''></br> et felis purus. Suspendisse pharetra vel nisl a sagittis. Nunc vitae lectus eu tortor malesuada hendrerit. Nam sollicitudin non ipsum quis porta. Praesent sodales nisl nec ex lacinia congue.
                     Cras pharetra ligula ligula, non pulvinar tortor pellentesque nec. Donec vel faucibus augue, in iaculis orci. In et lobortis lacus. Quisque condimentum dui ante, sit amet tincidunt diam dignissim nec. Integer id dolor vitae lacus fermentum egestas. Praesent non enim vitae ligula dignissim consequat at eu nisl. Donec in ipsum id nulla porta malesuada sed semper arcu. Aliquam quis ligula non odio dapibus consequat non non est. Mauris nec rutrum quam. Donec tortor augue, vestibulum at tortor non, interdum suscipit leo. Donec laoreet quis metus eu tincidunt. Fusce et vehicula lorem. Pellentesque pharetra placerat erat, non pharetra ipsum viverra sed.
                     Donec a nisl id turpis efficitur gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur velit neque, porta interdum semper nec, posuere non lorem. Nulla ut tellus mi. Nullam ut luctus neque. Proin fringilla tempus orci, non rhoncus arcu interdum sed. Vivamus sagittis tristique eros, ut laoreet nunc sagittis sed. Suspendisse dictum ullamcorper turpis, vel rhoncus sem vestibulum nec. In ultricies, sapien eu mattis feugiat, ex odio pellentesque magna, et cursus erat ex nec nunc.
                     Pellentesque bibendum et leo at pharetra. Cras sodales libero maximus efficitur mattis. Donec cursus, lectus quis eleifend accumsan, libero massa scelerisque sem, faucibus tincidunt quam mauris sit amet tortor. Duis efficitur purus at vehicula lacinia. Nulla sagittis aliquam ipsum, rhoncus gravida elit sodales sit amet. Morbi eget ex ut turpis pharetra vulputate ac nec diam. Suspendisse sit amet bibendum orci. Proin quis varius elit. Nunc euismod tempus lacus nec porttitor. Mauris id consequat nisi, in bibendum diam. Quisque metus est, volutpat id rutrum eu, efficitur a turpis.
                     Morbi nisi libero, sollicitudin ac lobortis eget, cursus nec risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eget arcu sit amet lectus semper dignissim. Aenean ut magna quis erat luctus maximus. Morbi in neque ex. In lacinia ullamcorper mi a dictum. Vivamus pellentesque, dui vitae fringilla dignissim, mi lectus tincidunt dolor, congue venenatis lectus tellus vel risus. Etiam quis tristique tortor.
                    </p>
                </div>
            </div>
        </main>
    )
}