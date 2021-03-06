'use strict';

//solution de Remy Portier de Fcc
function convertToRoman(num) {
  var nums = num;
  var result = "";
  var convey = [];
  var index = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var romans = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  (function iterator() {
    for (var i = index.length - 1; i >= 0; i--) {
      //console.log(index[i]);
      if (nums > 0) {
        if (nums >= index[i]) {
          result += romans[i];
          nums -= index[i];
          iterator();
          //console.log(iterator());
        }
      }
    }
  })();
}
convertToRoman(45);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0VG9Sb21hbiIsIm51bSIsIm51bXMiLCJyZXN1bHQiLCJjb252ZXkiLCJpbmRleCIsInJvbWFucyIsIml0ZXJhdG9yIiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLFNBQVNBLGNBQVQsQ0FBd0JDLEdBQXhCLEVBQTZCO0FBQzNCLE1BQUlDLE9BQU9ELEdBQVg7QUFDQSxNQUFJRSxTQUFTLEVBQWI7QUFDQSxNQUFJQyxTQUFTLEVBQWI7QUFDQSxNQUFJQyxRQUFRLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLEVBQVQsRUFBWSxFQUFaLEVBQWUsRUFBZixFQUFrQixFQUFsQixFQUFxQixHQUFyQixFQUF5QixHQUF6QixFQUE2QixHQUE3QixFQUFpQyxHQUFqQyxFQUFxQyxJQUFyQyxDQUFaO0FBQ0EsTUFBSUMsU0FBUSxDQUFDLEdBQUQsRUFBSyxJQUFMLEVBQVUsR0FBVixFQUFjLElBQWQsRUFBbUIsR0FBbkIsRUFBdUIsSUFBdkIsRUFBNEIsR0FBNUIsRUFBZ0MsSUFBaEMsRUFBcUMsR0FBckMsRUFBeUMsSUFBekMsRUFBOEMsR0FBOUMsRUFBa0QsSUFBbEQsRUFBdUQsR0FBdkQsQ0FBWjs7QUFFQSxHQUFDLFNBQVNDLFFBQVQsR0FBb0I7QUFDbkIsU0FBSyxJQUFJQyxJQUFJSCxNQUFNSSxNQUFOLEdBQWMsQ0FBM0IsRUFBOEJELEtBQUssQ0FBbkMsRUFBc0NBLEdBQXRDLEVBQTJDO0FBQ3pDO0FBQ0EsVUFBR04sT0FBTyxDQUFWLEVBQWE7QUFDWCxZQUFHQSxRQUFRRyxNQUFNRyxDQUFOLENBQVgsRUFBcUI7QUFDbkJMLG9CQUFVRyxPQUFPRSxDQUFQLENBQVY7QUFDQU4sa0JBQVFHLE1BQU1HLENBQU4sQ0FBUjtBQUNBRDtBQUNBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsR0FaRDtBQWFEO0FBQ0RQLGVBQWUsRUFBZiIsImZpbGUiOiJyZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3NvbHV0aW9uIGRlIFJlbXkgUG9ydGllciBkZSBGY2NcbmZ1bmN0aW9uIGNvbnZlcnRUb1JvbWFuKG51bSkge1xuICB2YXIgbnVtcyA9IG51bTtcbiAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gIHZhciBjb252ZXkgPSBbXTtcbiAgdmFyIGluZGV4ID0gWzEsNCw1LDksMTAsNDAsNTAsOTAsMTAwLDQwMCw1MDAsOTAwLDEwMDBdO1xuICB2YXIgcm9tYW5zID1bJ0knLCdJVicsJ1YnLCdJWCcsJ1gnLCdYTCcsJ0wnLCdYQycsJ0MnLCdDRCcsJ0QnLCdDTScsJ00nXTtcblxuICAoZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4gICAgZm9yICh2YXIgaSA9IGluZGV4Lmxlbmd0aCAtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIC8vY29uc29sZS5sb2coaW5kZXhbaV0pO1xuICAgICAgaWYobnVtcyA+IDApIHtcbiAgICAgICAgaWYobnVtcyA+PSBpbmRleFtpXSkge1xuICAgICAgICAgIHJlc3VsdCArPSByb21hbnNbaV07XG4gICAgICAgICAgbnVtcyAtPSBpbmRleFtpXTtcbiAgICAgICAgICBpdGVyYXRvcigpO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlcmF0b3IoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG59XG5jb252ZXJ0VG9Sb21hbig0NSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
