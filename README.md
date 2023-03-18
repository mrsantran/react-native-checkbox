# @chainsoft/react-native-checkbox

[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/mrsantran/react-native-checkbox/pulls)
[ ![NPM version](http://img.shields.io/npm/v/@chainsoft/react-native-checkbox.svg?style=flat)](https://www.npmjs.com/package/@chainsoft/react-native-checkbox)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/mrsantran/react-native-checkbox/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/@chainsoft/react-native-checkbox.svg)](https://www.npmjs.com/package/@chainsoft/react-native-checkbox)

Checkbox component for react native, it works on iOS and Android.

## Content

- [Installation](#installation)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

- Run `npm i @chainsoft/react-native-checkbox --save` or `yarn add @chainsoft/react-native-checkbox`

## Getting started

Add `@chainsoft/react-native-checkbox` to your project.

`import CheckBox from '@chainsoft/react-native-checkbox'`

Inside your component's render method, use CheckBox:

```javascript
<CheckBox
  style={{ flex: 1, padding: 10 }}
  onClick={() => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }}
  isChecked={this.state.isChecked}
  text={"Check Box"}
/>
```

Then you can use it like this:

### Basic usage

```javascript
<CheckBox
  style={{ flex: 1, padding: 10 }}
  onClick={() => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }}
  isChecked={this.state.isChecked}
  text={"Check Box"}
/>
```

### Custom CheckBox

```javascript
renderCheckBox(data) {
    var text = data.name;
    return (
        <CheckBox
            onClick={()=>{
                 this.setState({
                     isChecked:!this.state.isChecked
                 })
               }}
            text={text}
            isChecked={this.state.isChecked}
            checkedImage={<Image source={require('../../page/my/img/ic_check_box.png')} style={this.props.theme.styles.tabBarSelectedIcon}/>}
            unCheckedImage={<Image source={require('../../page/my/img/ic_check_box_outline_blank.png')} style={this.props.theme.styles.tabBarSelectedIcon}/>}
        />);
}
```

## API

| Props          | Type                      | Optional | Default       | Description                                                                                                             |
| -------------- | ------------------------- | -------- | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| style          | View.propTypes.style       | true     |               | Custom style checkbox                                                                                                   |
| text           | PropTypes.string          | true     |               | Custom Text                                                                                                             |
| textStyle      | Text.propTypes.style      | true     |               | Custom Text style                                                                                                       |
| textAlign      | PropTypes.string          | true     | 'left'        | text Align left or right (value: 'left', 'right')                                                                       |
| checkedImage   | PropTypes.element         | true     | Default image | Custom checked Image                                                                                                    |
| unCheckedImage | PropTypes.element         | true     | Default image | Custom unchecked Image                                                                                                  |
| isChecked      | PropTypes.bool            | false    | false         | checkbox checked state                                                                                                  |
| onClick        | PropTypes.func.isRequired | false    |               | callback function                                                                                                       |
| disabled       | PropTypes.bool            | true     | false         | Disable the checkbox button                                                                                             |
| checkBoxColor  | PropTypes.string          | true     |               | Tint color of the checkbox image (this props is for both checked and unchecked state)                                   |
| checkedColor   | PropTypes.string          | true     |               | Tint color of the checked state checkbox image (this prop will override value of `checkBoxColor` for checked state)     |
| unCheckedColor | PropTypes.string          | true     |               | Tint color of the unchecked state checkbox image (this prop will override value of `checkBoxColor` for unchecked state) |

## Contribution

Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

**MIT Licensed**
