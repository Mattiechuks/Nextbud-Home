import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';

interface ChatMessagesProps {
    onClose: () => void;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ onClose }) => {
    return (
        <div className="chat-messages" style={{ position: 'fixed', bottom: '20px', right: '20px', width: '375px', height:'600px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', zIndex: 1000 }}>
            <div className="chat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', color:'black' }}>
                <span style={{ fontWeight: 'light' }}>Message us</span>
                <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color:'', fontSize:'0.8em' }}>
                    x
                </button>
            </div>
            <div className="chat-content" style={{ maxHeight: '400px', overflowY: 'auto', padding: '10px' }}>
                <div className="chat-welcome custom-scrollbar" style={{ overflow: 'hidden' }} data-animate-remove="is-hiding" data-animate-removal-delay="1000">
                    <div className="chat-welcome__inner js-welcome-scroller custom-scrollbar__recipient" style={{ width: 'calc(100% + 16px)', marginRight: '-16px', overflowY: 'scroll' }}>
                        <div className="chat-welcome__shaft">
                            <div className="chat-faces chat-faces--1">
                                <div className="chat-faces__face chat-faces__face--100">
                                    <div className="chat-faces__userpic">
                                        <div className="userpic is-loaded" style={{ width: '50px', height: '50px', lineHeight: '50px' }}>
                                            <div className="userpic__inner">
                                                <div className="userpic__text">AaN</div>
                                                <svg>
                                                <image className="userpic__img js-userpic-img" xlinkHref="https://ucarecdn.com/d08114e4-de3f-4ff2-9d13-cdaf4252faf4/-/crop/450x449/0,127/-/preview/-/resize/200x200/"  />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-faces__name">Ade at NextBud</div>
                                </div>
                            </div>
                            <div className="chat-welcome-message parsed-text">
                                Ask us anything – we’ll get back to you here or by email.
                            </div>
                        </div>
                    </div>
                    <div className="custom-scrollbar__caret" style={{ height: '320px', transform: 'translateY(88px) translateZ(0px)' }}>
                        <div className="custom-scrollbar__caret-inner"></div>
                    </div>
                </div>

                <div className="chat-wrapper is-visually-hidden js-chat-wrapper custom-scrollbar" style={{ overflow: 'hidden' }}>
                    <div className="emojipicker js-picker">
                        <div className="emojipicker__inner">
                            {['😄', '😊', '😭', '😕', '😩', '😐', '😍', '😡', '😉', '😔', '😚', '😎', '😱', '😌', '👍', '👎', '👋', '👌', '✌️', '😇', '🦄'].map((emoji) => (
                                <span key={emoji} className="emojipicker__emoji js-emoji" data-emoji={emoji} tabIndex={0} role="button">
                                    <span className="emojipicker__emoji-inner">{emoji}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="input-area js-input-area is-empty">
                        <div className="input-area__row">
                            <div className="input-area__input custom-scrollbar" style={{ position: 'relative', overflow: 'hidden' }}>
                                <div>
                                    <textarea
                                        className="chat-textarea js-chat-textarea js-autofocus-chat is-empty custom-scrollbar__recipient"
                                        placeholder="Message..."
                                        aria-label="Message..."
                                        spellCheck="true"
                                        maxLength={4096}
                                        style={{ width: 'calc(100% + 16px)', marginRight: '-16px', overflowY: 'scroll', verticalAlign: 'middle', resize: 'none', minHeight: '47px', maxHeight: '137px', height: '47px' }}
                                    ></textarea>
                                </div>
                                <div className="custom-scrollbar__caret" style={{ height: '47px', transform: 'translateY(0px) translateZ(0px)' }}>
                                    <div className="custom-scrollbar__caret-inner"></div>
                                </div>
                            </div>

                            <div className="input-area__button-cell input-area__button-cell--rate is-hidden">
                                <button className="input-area__button js-rate-chat" title="Rate the conversation" aria-label="Rate the conversation">
                                    <svg className="input-area__button-icon input-area__button-icon--stroke">
                                        <use xlinkHref="#ei-half-star-icon"></use>
                                    </svg>
                                </button>
                            </div>

                            <div className="input-area__button-cell input-area__button-cell--emoji">
                                <button className="input-area__button js-pick-emoji" title="Insert emoji" aria-label="Insert emoji">
                                    <svg className="input-area__button-icon input-area__button-icon--stroke">
                                        <use xlinkHref="#icon-smile"></use>
                                    </svg>
                                </button>
                            </div>

                            <label className="input-area__button-cell input-area__button-cell--attachment is-hidden" htmlFor="file_upload_input" title="Attach a file" aria-label="Attach a file">
                                <svg className="input-area__button-icon">
                                    <use xlinkHref="#ei-paperclip-icon"></use>
                                </svg>
                                <input className="js-file-upload-input" name="file" style={{ display: 'none' }} id="file_upload_input" type="file" />
                            </label>

                            <div className="input-area__button-cell input-area__button-cell--submit">
                                <button className="input-area__button input-area__button--submit js-chat-submit-button" disabled title="Send" aria-label="Send">
                                    <svg className="input-area__button-icon">
                                        <use xlinkHref="#icon-send"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
};

export default ChatMessages;
