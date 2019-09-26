import React, { PureComponent } from 'react';
import { WriterWrapper } from '../style';

class Writer extends PureComponent {
        render() {
            return (
                <div>
                    <WriterWrapper>
                        作者～
                    </WriterWrapper>
                </div>
            )
        }
    }
export default Writer;