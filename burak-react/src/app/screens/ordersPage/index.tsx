import { Container, Typography, Box, Card, CardContent, Chip } from "@mui/material";

export function OrdersPage() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
          My Orders
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Track the real-time preparation and delivery progress of your meals.
        </Typography>

        <Card sx={{ p: 3, mb: 3 }}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Order #BK-9482
              </Typography>
              <Chip label="PROCESS" color="warning" />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Items: 1x Burak Special Kebab, 1x Fresh Ayran
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "primary.dark" }}>
              Total: $29.49
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
