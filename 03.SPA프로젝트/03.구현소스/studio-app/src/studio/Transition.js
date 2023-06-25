// 트랜지션 컴포넌트
import "./css/transition.css";

const transition_data = [{

    top:[
        "./images/combo-0.webp",
        "./images/combo-2.webp",
        "./images/combo-4.webp",
    ],
    bottom:[
        "./images/combo-1.webp",
        "./images/combo-3.webp",
        "./images/combo-5.webp",
    ],

}];

const Transition = () => {

    // console.log(transition_data.top[0]);

    // 랜덤수 설정
    let randomNum = Math.floor(Math.random()*3)
    console.log(randomNum)
    
    return (
        <>
            <div className="transition">
                <div className="transition-top">
                        {/* Array(최대수).fill -> 설정한 개수만큼 컴포넌트 셋팅하기 */}
                        {
                            Array(8).fill(
                                transition_data.map((v,i)=>
                                    <div className="transition-title" key={i}>
                                        <img src={v.top[randomNum]} alt="트랜지션 이미지" />
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
                                        <img src={v.bottom[randomNum]} alt="트랜지션 이미지" />
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