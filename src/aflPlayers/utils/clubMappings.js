import _ from 'lodash'

const clubMappings = [
  {
    clubName: 'Geelong Cats',
    className: 'geelong-cats'
  },
  {
    clubName: 'Port Adelaide',
    className: 'port-adelaide'
  },
  {
    clubName: 'Sydney Swans',
    className: 'sydney-swans'
  },
  {
    clubName: 'Collingwood',
    className: 'collingwood'
  },
  {
    clubName: 'Western Bulldogs',
    className: 'western-bulldogs'
  },
]

export default function getClassName(clubName) {
  const filteredClubs = _.filter(clubMappings, clubMapping => clubMapping.clubName === clubName)
  return filteredClubs[0] ? filteredClubs[0].className : ''
}