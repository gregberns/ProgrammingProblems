const points = [{
  i: 'a',
  x: 1,
  y: 1
},{
  i: 'b',
  x: 3,
  y: 8
}, {
  i: 'c',
  x: 5,
  y: 5,
}, {
  i: 'd',
  x: 9,
  y: 4
}, {
  i: 'e',
  x: 8,
  y: 9
}]

const calculateDistance = (point, neighbor) => {
  let a = Math.pow(point.x - neighbor.x, 2)
  let b = Math.pow(point.y - neighbor.y, 2)
  let res = Math.sqrt(a + b)
  return res
}

const distanceToNeighbors = (point, neighbors) => {
  return neighbors.map(n => {
    n.distance = calculateDistance(point, n)
    return n
  })
  .sort((a, b) => a.distance > b.distance)
}

const bestNeighbor = (currentPoint, neighbors) => {
  return distanceToNeighbors(currentPoint, neighbors)[0]
}

const navigate = (currentPoint, neighbors, pastPoints, path) => {
  const newNeighbors = R.filter(n => n.i !== currentPoint.i, neighbors)
  const newPastPoints = R.append(currentPoint, pastPoints)
  const newPath = R.append(currentPoint, path)
  
  if (newNeighbors.length == 0) {
    return newPath
  }
  
  let nextNeighbor = bestNeighbor(currentPoint, newNeighbors)
  
  return navigate(nextNeighbor, newNeighbors, newPastPoints, newPath)
}

const start = (startPoint, allPoints) => {
  return navigate(startPoint, allPoints, [], [])
}

let path = start(points[0], points)
console.log('result path')
console.log(path)
