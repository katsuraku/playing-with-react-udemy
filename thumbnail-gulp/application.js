var options = {
    thumbnailData: [{
      title: 'Show Animals',
      count: 32,
      header: 'Katsuraku',
      description: 'OK',
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdJhYyNuFmDQPzZH7R5wQvliIZnATy8a7u_rEmXuCsZ3VZfQco3_gneA'
    },{
      title: 'Show Animals',
      count: 25,
      header: 'Pikachu',
      description: 'OK',
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdJhYyNuFmDQPzZH7R5wQvliIZnATy8a7u_rEmXuCsZ3VZfQco3_gneA'
    }]
  };
  // React, please create an instance of this class and render that
  var element = React.createElement(ThumbnailList, options);

  // React, after you render this class, please place it in my body tag.
  React.render(element, document.querySelector('.container'));

var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"},
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.count)
    )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
      // This shortcut passes in all of the props for each Thumbnail created. So each one gets its relevant props.
      // Works by refering to the placeholder 'thumbnailProps' used in the map function.
    })
    return React.createElement("div", null, list)
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "thumbnail"},
      React.createElement("img", {src: this.props.imageUrl}),
      React.createElement("div", {className: "caption"},
        React.createElement("h3", null, this.props.header),
        React.createElement("p", null, this.props.description),
        React.createElement("p", null,
          React.createElement(Badge, {title: this.props.title, count: this.props.count})
        )
      )
    )
  }
});
