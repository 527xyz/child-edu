import React, { Component } from 'react'
import styles from './index.module.scss'
import Input from '../../components/input'
import img_left from '../../assets/img/ipt_left.jpg'
import img_right1 from '../../assets/img/ipt_right1.png'
import img_right2 from '../../assets/img/ipt_right2.png'
import banner from '../../assets/img/banner.png'
import banner2 from '../../assets/img/banner2.png'
import column_bg from '../../assets/img/column_bg.jpg'
import course_cover from '../../assets/img/course_cover.png'
import reading_img from '../../assets/img/reading_img.png'
import book1 from '../../assets/img/book1.png'
import book2 from '../../assets/img/book2.png'
import book3 from '../../assets/img/book3.png'
import volume1 from '../../assets/img/volume1.jpg'
import volume2 from '../../assets/img/volume2.jpg'
import volume3 from '../../assets/img/volume3.jpg'

import { Carousel, WingBlank } from 'antd-mobile';
export default class Home extends Component {
    constructor(props){
        super(props)
    }
    state = {
        booksSear: "",
        placeholder: '🔍  搜索绘本',
        data: ['1', '2'],
        imgHeight: 176,
        banner_img: [banner, banner2],
        course_list: ["li1", 'li2', 'li3', 'li4']

    }
    changeIpt = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
            });
        }, 100);
    }
    toLost=()=>this.props.history.push('/list')
    render() {
        
        return (
            <>
                {/* 顶部开始 */}
                <div className={styles.header}>
                    <div className={styles.ipt_left}>
                        <img src={img_left} alt="" />
                    </div>
                    <div className={styles.ipt}>
                        <Input model={{
                            name: "booksSear",
                            value: this.state.booksSear,
                            onChange: this.changeIpt,
                            placeholder: this.state.placeholder
                        }} />
                    </div>
                    <div className={styles.ipt_right1}>
                        <img src={img_right1} alt="" />
                    </div>
                    <div className={styles.ipt_right2}>
                        <img src={img_right2} alt="" />
                    </div>
                </div>
                {/* 顶部结束 */}
                {/* 轮播图 */}
                <div className={styles.swiper}>
                    <WingBlank>
                        <Carousel
                            autoplay={true}
                            infinite
                            dots={false}
                            autoplayInterval={1500}
                        >
                            {this.state.data.map((val, idx) => (
                                <a
                                    key={val}
                                    href="#"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        className={styles.banner_img}
                                        src={this.state.banner_img[idx]}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>
                {/* 分类 */}

                <div className={styles.kind_btn}>
                    <div>
                        <span onClick={this.toLost} className={[`${styles.kind_bg}`, `${styles['bg1']}`].join(' ')}></span>
                        <span className={styles.kind_tit}>语言智能</span>
                    </div>
                    <div>
                        <span onClick={this.toLost} className={[`${styles.kind_bg}`, `${styles['bg2']}`].join(' ')}></span>
                        <span className={styles.kind_tit}>数学逻辑</span>
                    </div>
                    <div>
                        <span onClick={this.toLost} className={[`${styles.kind_bg}`, `${styles['bg3']}`].join(' ')}></span>
                        <span className={styles.kind_tit}>人际交往</span>
                    </div>
                    <div>
                        <span onClick={this.toLost} className={[`${styles.kind_bg}`, `${styles['bg4']}`].join(' ')}></span>
                        <span className={styles.kind_tit}>自然观察</span>
                    </div>
                    <div>
                        <span onClick={this.toLost} className={[`${styles.kind_bg}`, `${styles['bg5']}`].join(' ')}></span>
                        <span className={styles.kind_tit}>全部</span>
                    </div>
                </div>
                {/* 在线课程 */}

                <div className={[`${styles.online_course}`, `${styles['cloumn']}`].join(' ')}>
                    <div className={styles.list_top}>
                        <div className={styles.list_top_left}>
                            <div className={styles.list_tit_bg}>
                                <img src={column_bg} alt="" />&nbsp;
                            </div>
                            <div className={styles.list_tit}> 在线课程</div>
                        </div>
                        <div className={styles.list_top_right}>
                            更多 &gt;
                        </div>
                    </div>
                    <div className={styles.list_box}>

                        <div className={[`${styles.list_content}`, `${styles['addmargin']}`].join(' ')}>
                            {this.state.course_list.map(val => (
                                <div className={styles.course_list} key={val}>
                                    <div className={styles.course_cover}>
                                        <img src={course_cover} alt="" />
                                        <span className={styles.course_update}>更新</span>
                                        <span className={styles.course_time}>10:28</span>
                                    </div>
                                    <div className={styles.course_intor}>
                                        <p className={styles.course_tit}>读书到底是为了谁好?</p>
                                        <div className={styles.course_tag}>
                                            <span className={styles.course_tag_1}>4~6岁</span>
                                            <span className={styles.course_tag_2}>中文阅读</span>
                                        </div>
                                        <p className={styles.course_price}>9讲/￥10.00</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* 每日精读4 */}

                <div className={[`${styles.online_course}`, `${styles['cloumn']}`].join(' ')}>
                    <div className={styles.list_top}>
                        <div className={styles.list_top_left}>
                            <div className={styles.list_tit_bg}>
                                <img src={column_bg} alt="" />&nbsp;
                            </div>
                            <div className={styles.list_tit}> 每日精读</div>
                        </div>
                        <div className={styles.list_top_right}>
                            更多 &gt;
                        </div>
                    </div>
                    <div className={styles.list_box}>
                        <div className={[`${styles.list_content}`, `${styles['reading']}`].join(' ')}>
                            <section>
                                <div className={styles.read_left}>
                                    <p className={styles.read_left_tit}>《我爸爸叫焦尼》</p>
                                    <p className={styles.read_left_con}>6月的第三周星期天是“父亲节”而最好的父亲节礼物...</p>
                                    <div className={styles.course_tag}>
                                        <span className={styles.course_tag_1}>4~6岁</span>
                                        <span className={styles.course_tag_2}>家庭教育</span>
                                    </div>
                                </div>
                                <div className={styles.read_right}>
                                    <img src={reading_img} alt="" />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                {/* 为你推荐 */}

                <div className={[`${styles.online_course}`, `${styles['cloumn']}`].join(' ')}>
                    <div className={styles.list_top}>
                        <div className={styles.list_top_left}>
                            <div className={styles.list_tit_bg}>
                                <img src={column_bg} alt="" />&nbsp;
                            </div>
                            <div className={styles.list_tit}> 为你推荐</div>
                        </div>
                        <div className={styles.list_top_right}>
                            更多 &gt;
                        </div>
                    </div>
                    <div className={styles.list_box}>
                        <div className={styles.list_content}>
                            <div className={styles.book_box}>
                                <div className={styles.book_list}>
                                    <img src={book1} alt="" />
                                    <span className={styles.book_name}>多些陪伴</span>
                                </div>
                                <div className={styles.book_list}>
                                    <img src={book2} alt="" />
                                    <span className={styles.book_name}>和睦相处</span>
                                </div>
                                <div className={styles.book_list}>
                                    <img src={book3} alt="" />
                                    <span className={styles.book_name}>谁是真正的朋友</span>
                                </div>
                                <div className={styles.book_list}>
                                    <img src={book1} alt="" />
                                    <span className={styles.book_name}>多些陪伴</span>
                                </div>
                                <div className={styles.book_list}>
                                    <img src={book2} alt="" />
                                    <span className={styles.book_name}>和睦相处</span>
                                </div>
                                <div className={styles.book_list}>
                                    <img src={book3} alt="" />
                                    <span className={styles.book_name}>谁是真正的朋友</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 推荐书单 */}

                <div className={[`${styles.online_course}`, `${styles['cloumn']}`].join(' ')}>
                    <div className={styles.list_top}>
                        <div className={styles.list_top_left}>
                            <div className={styles.list_tit_bg}>
                                <img src={column_bg} alt="" />&nbsp;
                            </div>
                            <div className={styles.list_tit}> 推荐书单</div>
                        </div>
                        <div className={styles.list_top_right}>
                            更多 &gt;
                        </div>
                    </div>
                    <div className={styles.list_box}>

                        <div className={[`${styles.list_content}`, `${styles['volume_H']}`].join(' ')}>
                            <div className={styles.volume_box}>
                                <img className={styles.volume} src={volume1} alt="" />
                                <img className={styles.volume} src={volume2} alt="" />
                                <img className={styles.volume} src={volume3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* 暂无更多 */}
                <p className={styles.no_more}>没有更多内容啦~</p>
            </>
        )
    }
}

