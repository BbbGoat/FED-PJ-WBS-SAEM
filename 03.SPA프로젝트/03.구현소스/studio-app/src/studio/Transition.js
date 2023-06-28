// 트랜지션 컴포넌트
import "./css/transition.css";

const transition_data = [{

    top:[
        "./images/combo-0.webp",
        "./images/combo-2.webp",
        "./images/combo-4.webp",
        "./images/combo-6.webp",
        "./images/combo-8.webp",
    ],
    bottom:[
        "./images/combo-1.webp",
        "./images/combo-3.webp",
        "./images/combo-5.webp",
        "./images/combo-7.webp",
        "./images/combo-8.webp",
    ],

}];

const Transition = (props) => {

    // console.log("Transition 컴포넌트 props.num:",props.num)
    // console.log(transition_data.top[0]);

    
    return (
        <>
            <div className="transition">
                <div className="transition-top">
                        {/* Array(최대수).fill -> 설정한 개수만큼 컴포넌트 셋팅하기 */}
                        {
                            Array(8).fill(
                                transition_data.map((v,i)=>
                                    <div className="transition-title" key={i}>
                                        <img src={v.top[props.num]} alt="트랜지션 이미지" />
                                    </div>
                                )
                            )
                        }
                </div>
                <div className="transition-bottom">
                        {/* Array(최대수).fill -> 설정한 개수만큼 컴포넌트 셋팅하기 */}
                        {
                            Array(8).fill(
                                transition_data.map((v,i)=>
                                    <div className="transition-title" key={i}>
                                        <img src={v.bottom[props.num]} alt="트랜지션 이미지" />
                                    </div>
                                )
                            )
                        }
                </div>
            </div>
        </>
    );
};

export default Transition;