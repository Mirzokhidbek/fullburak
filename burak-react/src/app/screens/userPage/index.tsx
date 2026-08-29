import { Container, Typography, Box, Card, CardContent, Avatar } from "@mui/material";

export function UserPage() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Card sx={{ p: 4 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Avatar
              sx={{ width: 90, height: 90, bgcolor: "primary.main", color: "#000", fontSize: "2rem", mx: "auto", mb: 2 }}
            >
              B
            </Avatar>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              Burak Customer
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              +998 90 123 45 67 &bull; Member Points: 250 pts
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
