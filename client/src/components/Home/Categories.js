import { Button, Table, TableHead, TableRow, TableCell, TableBody,makeStyles } from "@material-ui/core";
import { categories } from '../../constants/data';

const useStyle = makeStyles({
  table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
  create:{
    margin: 20,
    background: '#072227',
    width: '90%',
    color: '#fff'
  }
})

const Categories = () =>  {
  const classes = useStyle();
  return (
    <>
      <Button variant="contained" className={classes.create}>Create Blogs</Button>
      <Table className={classes.table}>
        <TableHead>
            <TableCell>
                    All Categories
            </TableCell>
        </TableHead>
        <TableBody>
          {
            categories.map(category => (
              <TableRow>
                <TableCell>
                  {category}
                </TableCell>
              </TableRow>
            ))
          }
       </TableBody>
      </Table>
    </>
  )
}

export default Categories;
