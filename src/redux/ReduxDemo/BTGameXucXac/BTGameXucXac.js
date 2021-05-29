import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import style from '../../../assets/styles/components/BTGameXucXac.module.css'

export default class BTGameXucXac extends Component {
    render() {
        return (
            <div className={`${style.bgGame}`}>
                <h3 className="display-4 text-center mt-5">BAI TAP GAME XUC XAC</h3>


               <XucXac></XucXac>
               <KetQuaTroChoi></KetQuaTroChoi>
            </div>
        )
    }
}
