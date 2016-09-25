import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Step, Stepper, StepLabel } from 'material-ui/Stepper'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import HorizontalLinearStepper from './HorizontalLinearStepper'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
//import { browserHistory, Router, Route } from 'react-router'
import {MultiSelect} from 'react-selectize'
import '../../node_modules/react-selectize/themes/index.css';

class Search extends Component {

  constructor(props, context){
    super(props, context);
  }

  render() {
    console.log("this.props", this.props)
    return (
        <MuiThemeProvider>
        <SearchGridLayout>
        <div key={'searchText'}>
        <SearchTextField
      hint={"input your secrets"}
      text={"hehehe"} />
        </div>

        <div key={'searchBtn'}>
        <SearchBtn
      label={"Search"}
      onClick={() => this.props.history.push('/selection')}
        /></div>
        <div key={'categorySelection'}>
        <CategorySelection />
        </div>

        </SearchGridLayout>
        </MuiThemeProvider>
    )
  }
}


class SearchGridLayout extends Component {
  constructor(props, context){
    super(props, context);
  }

  render() {

    let layouts = {
      lg:[{i:"searchText", x: 3, y: 2, w: 6, h: 0.2, static:true},
          {i:"searchBtn", x: 9, y: 2, w: 1, h: 0.2, static:true},
          {i:"categorySelection", x: 3, y: 1, w: 3, h: 0.2, static:true},]
    }

    return(
        <ResponsiveReactGridLayout
      layouts={layouts}
      breakpoints={{lg: 800, md: 600, sm: 500, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        {this.props.children}
      </ResponsiveReactGridLayout>
    )
  }

}


class SearchTextField extends Component {
  constructor(props, context){
    super(props, context);
  }

  render() {
    return (
        <TextField
      hintText={this.props.hint}
      value={this.props.text}
      onChange={() => {}}
      fullWidth={true} />
    )
  }


}

class CategorySelection extends Component {

  constructor(props, context){
    super(props, context);
  }

  render() {
    let ops = [{label:"apple",
                value:"apple"},
               {label:"mango",
                value:"mango"},
               {label:"grapes",
                value:"grapes"}]

    return (
        <MultiSelect
      options={ops}
      onValuesChange = {() => {}}
      placeholder={"请选择投放类目"}>
        </MultiSelect>
    )
  }


}


class SearchBtn extends Component {
  constructor(props, context){
    super(props, context);
  }

  render() {
      return (
          <RaisedButton
        fullWidth={true}
        label={this.props.label}
        onClick={() => this.props.onClick()} />
      )
  }
}

export default Search