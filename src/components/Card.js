import React from 'react';
import '../styles/Card.css';

class Card extends React.Component
{
    render()
    {
       const profile = this.props;
       return (
        <div className="github-profile">
            <img src={profile.avatar_url}/>
            <div className="info">
                <div className="name">{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>
        </div>
       );
    }
}


const CardList = (props) => (
    <div>
        {
            props.details.profiles.map(profile => <Card {...profile} key={profile.id}  />)
        }
    </div>

);

export default CardList