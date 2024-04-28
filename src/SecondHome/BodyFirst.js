import React, { useEffect } from 'react';
import './BodyFirst.css';

function BodyFirst() {
    const splitLetters = (word) => {
        const content = word.innerHTML;
        word.innerHTML = '';
        const letters = [];
        for (let i = 0; i < content.length; i++) {
            const letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        return letters;
    }

    useEffect(() => {
        const words = document.getElementsByClassName('word');
        const wordArray = [];
        let currentWord = 0;

        words[currentWord].style.opacity = 1;
        for (let i = 0; i < words.length; i++) {
            const letters = splitLetters(words[i]);
            wordArray.push(letters);
        }

        const changeWord = () => {
            const cw = wordArray[currentWord];
            const nw = currentWord === words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
            for (let i = 0; i < cw.length; i++) {
                animateLetterOut(cw, i);
            }

            for (let i = 0; i < nw.length; i++) {
                nw[i].className = 'letter behind';
                nw[0].parentElement.style.opacity = 1;
                animateLetterIn(nw, i);
            }

            currentWord = (currentWord === wordArray.length - 1) ? 0 : currentWord + 1;
        }

        const animateLetterOut = (cw, i) => {
            setTimeout(() => {
                cw[i].className = 'letter out';
            }, i * 80);
        }

        const animateLetterIn = (nw, i) => {
            setTimeout(() => {
                nw[i].className = 'letter in';
            }, 340 + (i * 80));
        }

        const intervalId = setInterval(changeWord, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="BodyFirst">
            <div className="text">
                <p>Nachos are </p>
                <p>
                    <span className="word wisteria">tasty.</span>
                    <span className="word belize">wonderful.</span>
                    <span className="word pomegranate">fancy.</span>
                    <span className="word green">beautiful.</span>
                    <span className="word midnight">cheap.</span>
                </p>
            </div>
        </div>
    );
}

export default BodyFirst;
