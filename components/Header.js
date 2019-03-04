import Link from 'next/link'
import Head from 'next/head'

export default class Header extends React.Component {

    componentDidMount() {

    }
    }

	render () {

		
		return <div className="header" >

					<div className="header-container container">
							
							<ul className="header-leftItems">
								<li className="header-leftItem">
									<a href="">{this.props.firstLink}</a>
								</li>
								<li className="header-leftItem">
									<a href="">{this.props.secondLink}</a>
								</li>
								<li className="header-leftItem">
									<a href="">{this.props.thirdLink}</a>
								</li>
								<li className="header-leftItem">
									<a href="">{this.props.fourthLink}</a>
								</li>
							</ul>

					</div>
					
					<style jsx>{`
						

					`}</style>

				</div>
	}
}