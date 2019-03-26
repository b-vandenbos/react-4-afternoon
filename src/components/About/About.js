import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
        <Link to='/about' className="subnav_links"><h3>About</h3></Link>
        <Link to='/about/history' className="subnav_links"><h3>History</h3></Link>
        <Link to='/about/contact' className="subnav_links"><h3>Contact</h3></Link>
        </div>
        <div className='box'>
        <Switch>
          <Route path='./about/history' component={History} />
          <Route path='.about/contact' component={Contact} />
          <Route exact path='/about' render={ () => (
            <div>
              <h1>About the University</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ante sollicitudin, finibus diam eu, hendrerit magna. Donec lacinia ex velit, in suscipit nisi lobortis et. Donec quis pellentesque dolor. Vestibulum eget ex nec orci venenatis aliquet. Quisque nec leo et metus consequat aliquam vitae sit amet odio. Nunc odio enim, mattis ac mauris vel, elementum rhoncus massa. Donec nisl turpis, porttitor et ornare id, aliquam vitae ex.</p>
              <p>Nam semper sem vitae sem vulputate tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla quis tempor neque. Nunc eleifend, nisi nec tincidunt rhoncus, orci nunc convallis mi, sit amet imperdiet ligula nunc ut risus. Aenean vel justo mi. In in neque eu erat pretium aliquet. Phasellus massa turpis, sollicitudin sed eros a, dignissim ullamcorper nunc.</p>
              <p>Pellentesque scelerisque urna ipsum, sit amet lacinia turpis maximus sit amet. Cras accumsan sagittis pellentesque. Integer ac ante a justo sodales posuere eu sit amet risus. Nulla ornare, sapien eget convallis viverra, eros erat tristique odio, in condimentum tortor ante in arcu. Etiam malesuada, ex eget maximus congue, turpis augue sodales risus, at porta nibh metus malesuada mi. Etiam blandit odio ac dui tincidunt porta. In quis mi mauris. Pellentesque malesuada vitae tellus interdum blandit. Donec eu ex eget nisi finibus ullamcorper sit amet id arcu. Fusce ullamcorper posuere tortor, eu consectetur arcu ultricies fermentum. Vivamus consequat, nisl sit amet molestie pellentesque, nisl nibh tristique nulla, nec lacinia justo nulla nec nulla. Morbi nec diam suscipit, interdum urna sit amet, maximus dolor. Sed vel massa in nunc dignissim porttitor id ut mauris. Sed quis consectetur sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
          )
          }

           />
        </Switch>
        </div>
      </div>
    )
  }
}