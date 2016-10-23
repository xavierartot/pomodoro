'use strict';

// les function sont des variables qui se manipulent comme les autres variables
// une function peux retourner une autre function
var maFunction = function maFunction() {
  return function (x) {
    console.log(x);
  };
};
var nouvelleFunction = maFunction(); // stocke la nouvelle function
nouvelleFunction('y'); // execute la function (affiche 'y' dans la console)


//origine est defini dans la parente et est utilise par la fille
var setOrigineAndGetVoyage = function setOrigineAndGetVoyage(origine) {
  var voyagerVers = function voyagerVers(nouvellePlanete) {
    console.log('Nous vivons desormais sur ' + nouvellePlanete);
    console.log('Mais nous venons de ' + origine);
  };
  return voyagerVers;
};

// la variable origine en premier est affecte a setOrigineAndGetVoyage
var demenager = setOrigineAndGetVoyage('la terre');
//puis le parametre de la variable voyagerVers est utilise, par ordre
//puisqu'il y a conflit
demenager('Mars');

// affiche: Nous vivons desormais sur Mars
// affiche: Mais nous venons de la terre
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3N1cmUuanMiXSwibmFtZXMiOlsibWFGdW5jdGlvbiIsIngiLCJjb25zb2xlIiwibG9nIiwibm91dmVsbGVGdW5jdGlvbiIsInNldE9yaWdpbmVBbmRHZXRWb3lhZ2UiLCJvcmlnaW5lIiwidm95YWdlclZlcnMiLCJub3V2ZWxsZVBsYW5ldGUiLCJkZW1lbmFnZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBLElBQUlBLGFBQWEsU0FBYkEsVUFBYSxHQUFZO0FBQzNCLFNBQU8sVUFBVUMsQ0FBVixFQUFhO0FBQ2xCQyxZQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDRCxHQUZEO0FBR0QsQ0FKRDtBQUtBLElBQUlHLG1CQUFtQkosWUFBdkIsQyxDQUFtQztBQUNuQ0ksaUJBQWlCLEdBQWpCLEUsQ0FBc0I7OztBQUd0QjtBQUNBLElBQUlDLHlCQUF5QixTQUF6QkEsc0JBQXlCLENBQVVDLE9BQVYsRUFBbUI7QUFDOUMsTUFBSUMsY0FBYyxTQUFkQSxXQUFjLENBQVVDLGVBQVYsRUFBMkI7QUFDM0NOLFlBQVFDLEdBQVIsQ0FBWSwrQkFBK0JLLGVBQTNDO0FBQ0FOLFlBQVFDLEdBQVIsQ0FBWSx5QkFBeUJHLE9BQXJDO0FBQ0QsR0FIRDtBQUlBLFNBQU9DLFdBQVA7QUFDRCxDQU5EOztBQVFBO0FBQ0EsSUFBSUUsWUFBWUosdUJBQXVCLFVBQXZCLENBQWhCO0FBQ0E7QUFDQTtBQUNBSSxVQUFVLE1BQVY7O0FBRUE7QUFDQSIsImZpbGUiOiJjbG9zdXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGVzIGZ1bmN0aW9uIHNvbnQgZGVzIHZhcmlhYmxlcyBxdWkgc2UgbWFuaXB1bGVudCBjb21tZSBsZXMgYXV0cmVzIHZhcmlhYmxlc1xuLy8gdW5lIGZ1bmN0aW9uIHBldXggcmV0b3VybmVyIHVuZSBhdXRyZSBmdW5jdGlvblxudmFyIG1hRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgIGNvbnNvbGUubG9nKHgpO1xuICB9O1xufTtcbnZhciBub3V2ZWxsZUZ1bmN0aW9uID0gbWFGdW5jdGlvbigpLy8gc3RvY2tlIGxhIG5vdXZlbGxlIGZ1bmN0aW9uXG5ub3V2ZWxsZUZ1bmN0aW9uKCd5JykgLy8gZXhlY3V0ZSBsYSBmdW5jdGlvbiAoYWZmaWNoZSAneScgZGFucyBsYSBjb25zb2xlKVxuXG5cbi8vb3JpZ2luZSBlc3QgZGVmaW5pIGRhbnMgbGEgcGFyZW50ZSBldCBlc3QgdXRpbGlzZSBwYXIgbGEgZmlsbGVcbnZhciBzZXRPcmlnaW5lQW5kR2V0Vm95YWdlID0gZnVuY3Rpb24gKG9yaWdpbmUpIHtcbiAgdmFyIHZveWFnZXJWZXJzID0gZnVuY3Rpb24gKG5vdXZlbGxlUGxhbmV0ZSkge1xuICAgIGNvbnNvbGUubG9nKCdOb3VzIHZpdm9ucyBkZXNvcm1haXMgc3VyICcgKyBub3V2ZWxsZVBsYW5ldGUgKTtcbiAgICBjb25zb2xlLmxvZygnTWFpcyBub3VzIHZlbm9ucyBkZSAnICsgb3JpZ2luZSApO1xuICB9O1xuICByZXR1cm4gdm95YWdlclZlcnM7XG59O1xuXG4vLyBsYSB2YXJpYWJsZSBvcmlnaW5lIGVuIHByZW1pZXIgZXN0IGFmZmVjdGUgYSBzZXRPcmlnaW5lQW5kR2V0Vm95YWdlXG52YXIgZGVtZW5hZ2VyID0gc2V0T3JpZ2luZUFuZEdldFZveWFnZSgnbGEgdGVycmUnKTtcbi8vcHVpcyBsZSBwYXJhbWV0cmUgZGUgbGEgdmFyaWFibGUgdm95YWdlclZlcnMgZXN0IHV0aWxpc2UsIHBhciBvcmRyZVxuLy9wdWlzcXUnaWwgeSBhIGNvbmZsaXRcbmRlbWVuYWdlcignTWFycycpO1xuXG4vLyBhZmZpY2hlOiBOb3VzIHZpdm9ucyBkZXNvcm1haXMgc3VyIE1hcnNcbi8vIGFmZmljaGU6IE1haXMgbm91cyB2ZW5vbnMgZGUgbGEgdGVycmUgXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
