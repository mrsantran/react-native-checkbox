/**
 * react-native-checkbox
 * Checkbox component for react native, it works on iOS and Android
 * https://github.com/mrsantran/react-native-checkbox
 * Email: santran686@gmail.com
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

const ViewPropTypes = View.propTypes;

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        ...ViewPropTypes,
        text: PropTypes.string,
        textStyle: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
        ]),
        checkedImage: PropTypes.element,
        unCheckedImage: PropTypes.element,
        onClick: PropTypes.func.isRequired,
        isChecked: PropTypes.bool.isRequired,
        isIndeterminate: PropTypes.bool.isRequired,
        checkBoxColor: PropTypes.string,
        checkedColor: PropTypes.string,
        unCheckedColor: PropTypes.string,
        disabled: PropTypes.bool,
        textAlign: PropTypes.string,
    }
    static defaultProps = {
        isChecked: false,
        textAlign: 'left',
        isIndeterminate: false,
        textStyle: {}
    }

    onClick() {
        this.props.onClick();
    }

    _renderLeft() {
        if (!this.props.text || this.props.textAlign === 'right') return null;

        return (
            <Text style={[{ flexDirection: 'column', marginRight: 10 }, this.props.textStyle]}>{this.props.text}</Text>
        );
    }

    _renderRight() {
        if (!this.props.text || this.props.textAlign === 'left') return null;
        return (
            <Text style={[{ flexDirection: 'column', marginLeft: 10 }, this.props.textStyle]}>{this.props.text}</Text>
        );
    }

    _renderImage() {
        if (this.props.isIndeterminate) {
            return this.props.indeterminateImage ? this.props.indeterminateImage : this.genCheckedImage();
        }
        if (this.props.isChecked) {
            return this.props.checkedImage ? this.props.checkedImage : this.genCheckedImage();
        } else {
            return this.props.unCheckedImage ? this.props.unCheckedImage : this.genCheckedImage();
        }
    }

    _getCheckedCheckBoxColor() {
        return this.props.checkedColor ? this.props.checkedColor : this.props.checkBoxColor
    }

    _getUncheckedCheckBoxColor() {
        return this.props.unCheckedColor ? this.props.unCheckedColor : this.props.checkBoxColor
    }

    _getTintColor() {
        return this.props.isChecked ? this._getCheckedCheckBoxColor() : this._getUncheckedCheckBoxColor()
    }

    genCheckedImage() {
        let source;
        if (this.props.isIndeterminate) {
            source = require('./img/ic_indeterminate_check_box.png');
        }
        else {
            source = this.props.isChecked ? require('./img/ic_check_box.png') : require('./img/ic_check_box_outline_blank.png');
        }

        return (
            <Image source={source} style={{ tintColor: this._getTintColor() }} />
        );
    }

    render() {
        return (
            <TouchableHighlight
                style={this.props.style}
                onPress={() => this.onClick()}
                underlayColor='transparent'
                disabled={this.props.disabled}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    {this._renderLeft()}
                    {this._renderImage()}
                    {this._renderRight()}
                </View>
            </TouchableHighlight>
        );
    }
}