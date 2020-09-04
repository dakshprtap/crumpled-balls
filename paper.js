class Paper {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.options = {
      restitution: 0.3,
      friction: 0.5,
      density: 1.2
    };

    this.body = Bodies.circle(this.x, this.y, 20, this.options);
    World.add(world, this.body);
  }
  display() {
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, 20, 20);
  }
}

