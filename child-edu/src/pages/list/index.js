import React, { useState, useEffect ,Fragment} from 'react'
import './list.scss'
import { Tabs, Badge } from 'antd-mobile';
import book_img1 from '../../assets/img/book1.png'
import book_img2 from '../../assets/img/book2.png'
import book_img3 from '../../assets/img/book3.png'
export default function List(props) {
    const [tabs] = useState(
        [
            { title: <Badge>全部</Badge> },
            { title: <Badge>童谣诗歌</Badge> },
            { title: <Badge>民间童话</Badge> },
            { title: <Badge>传统节日</Badge> },
            { title: <Badge>阅读启蒙</Badge> },
        ]
    )
    const toBack=()=>{
        props.history.go(-1)
    }
    const [bookNum] = useState([1, 2, 3, 4, 5, 6])
    return (
        <>
            <div className="header">
                <span className="back" onClick={toBack}>&lt;</span>
                <h2 className="tit">列表</h2>
            </div>
            {/* 标签栏 */}
            <div className="tabs">
                <Tabs tabs={tabs} initialPage={1} >
                    <div className="article_list">
                        {
                            bookNum.map(val => (
                                <Fragment key={val}>
                                    <div className="list_box">
                                        <div className="book_img"><img src={book_img1} alt=""/></div>
                                        <div className="book_tit">多些陪伴</div>
                                    </div>
                                    <div className="list_box">
                                        <div className="book_img"><img src={book_img2} alt=""/></div>
                                        <div className="book_tit">和睦相处</div>
                                    </div>
                                    <div className="list_box">
                                        <div className="book_img"><img src={book_img3} alt=""/></div>
                                        <div className="book_tit">谁是真正的朋友</div>
                                    </div>
                                </Fragment>
                            ))
                        }
                    </div>
                </Tabs>
            </div>
        </>
    )
}

